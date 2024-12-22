const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

const registerValidation = (name: string, value: any) => {
    switch (name) {
        case 'name':
            return value.length === 0 ? 'Name is required' : '';
        case 'email':
            return value.length === 0
                ? 'Email is required'
                : !emailRegex.test(value)
                    ? 'Invalid email format'
                    : '';
        case 'password':
            return value.length === 0
                ? 'Password is required'
                : !passwordRegex.test(value)
                    ? 'Password must be 8-15 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character'
                    : '';
        case 'accountType':
            return !value ? 'Please select an account type' : '';
        default:
            return '';
    }
}

export { registerValidation };