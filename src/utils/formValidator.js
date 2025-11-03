export function validateContactForm({ name, email, address }) {
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

    if (!address.trim()) {
        errors.address = 'Address is required.'
    }

    return errors
}

export function validateRegFrom(name,phone,email,pin,address){
    const errors = {}
    const namePattern = /^[A-Za-z\s.]+$/
    const phonePattern = /^[6-9]\d{9}$/

    if (!name.trim()) {
        errors.name = 'Name is required.'
    } else if (!namePattern.test(name)) {
        errors.name = 'Name can only contain letters, spaces, and dots.'
    }

    if (!phone.trim()) {
        errors.phone = 'phone is required.'
    } else if (!phone.length==10) {
        errors.phone = 'phone numbers must be 10 digit'
    } else if (!phonePattern.test(phone)) {
        errors.phone = 'phone can only contain numbers'
    }

    if (!email.trim()) {
        errors.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errors.email = 'Email is invalid.'
    }

    if (!address.trim()) {
        errors.address = 'Address is required.'
    }

    return errors
}