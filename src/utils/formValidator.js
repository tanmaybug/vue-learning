export function validateContactForm({ name, email, message }) {
    const errors = {}
    const namePattern = /^[A-Za-z\s.]+$/

    if (!name.trim()) {
        errors.name = 'Name is required.'
    } else if (!namePattern.test(name)) {
        errors.name = 'Name can only contain letters, spaces, and dots.'
    }

    if (!email.trim()) {
        errors.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errors.email = 'Email is invalid.'
    }

    if (!message.trim()) {
        errors.message = 'Message is required.'
    }

    return errors
}