const User = require('../models/User');
const Account = require('../models/Account')
const { generateAccountDetails } = require('../utils/accountUtils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function generateRiskScore() {
    return Math.floor(Math.random() * 100) + 1;
}

function determineRiskLevel(score) {
    if (score <= 33) {
        return 'low';
    } else if (score <= 66) {
        return 'medium';
    } else {
        return 'high';
    }
}


exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);

        const riskScore = generateRiskScore();
        const riskLevel = determineRiskLevel(riskScore);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            riskScore,
            riskLevel,
            onboardingStatus: riskLevel === 'low' ? 'approved' : 'pending',
            enrollmentPending: riskLevel !== 'high'
        });

        await newUser.save();
        res.status(201).json({ msg: 'User registered successfully', user: newUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'User does not exist' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        if (user.riskLevel === 'high') {
            return res.status(403).json({ msg: 'User registration not allowed due to high risk' });
        }

        if (user.onboardingStatus === 'pending') {
            return res.status(403).json({ msg: 'User onboarding pending approval' });
        }

        if (user.enrollmentPending) {
            return res.status(403).json({ msg: 'User enrollment pending completion' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
;

exports.enrollUser = async (req, res) => {
    const { securityImage, accountType, alias } = req.body;

    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        if (!user.enrollmentPending) {
            return res.status(400).json({ msg: 'User is already enrolled' });
        }

        // Generate account number and CBU for the user
        const { accountNumber, cbu } = await generateAccountDetails(accountType);

        // Create a new account associated with the user
        const newAccount = new Account({
            userId: req.user.id,
            accountType,
            alias,
            accountNumber,
            cbu
        });

        await newAccount.save();

        // Update user with security image and mark enrollment as completed
        user.securityImage = securityImage;
        user.enrollmentPending = false;
        await user.save();

        res.status(201).json({ msg: 'Enrollment completed and account created successfully', account: newAccount });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


