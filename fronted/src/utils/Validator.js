
export const validateForm = (formData) => {
    const errors = {};
  
    Object.entries(formData).forEach(([field, value]) => {
  
      if (!value  ) {
        errors[field] = `This field is required`;
      } else {
  
        switch (field) {
          case ('email'):
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
              errors[field] = 'Please enter a valid email address';
            }
            break;
  
          // case ('password'):
          //   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
          //   if (!passwordRegex.test(value)) {
          //     errors[field] = 'Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one digit';
          //   }
          //   break;
  
          default:
            break;
        }
      }
    });

    return errors;
  };
  