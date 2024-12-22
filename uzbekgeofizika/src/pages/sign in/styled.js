import { Box, Button, styled, TextField, Typography } from "@mui/material";
import img from '../../assets/dashboard-check.svg'

export const Container = styled(Box)({

})
export const Right = styled(Box)({
    height: '100vh',
    backgroundColor: '#F8FAFC',
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '50%', 
})

export const Left = styled(Box)({
    position:'relative',
    boxSizing: 'border-box',
    paddingInline:'50px',
    height: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'start', 
    alignItems: 'center',
    '@media (max-width: 1140px)': {
        paddingInline:'20px' 
    },
    '@media (max-width: 760px)': {
        paddingInline:'10px' 
    },
    
})
export const LeftBox = styled(Box)({
    paddingTop:'5rem'
})
 export const Title = styled(Typography)({
    margin:0,
    paddingTop: '30px',
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#475569',
 })
 export const Title2 = styled(Title)({
    paddingTop: 0,
    fontSize: '14px',
    color: '#828EA6',
    fontWeight: '500',
 })
 export const Title3 = styled(Title2)({
    fontSize: '12px',
    textAlign: 'center',
 })
 export const FooterBox = styled(Box)({
    position:'absolute',
    bottom:'1rem'
 })
 export const Input = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        backgroundColor: '#E9EEF5', 
        borderRadius: '8px', 
        '& fieldset': {
            borderColor: '#E9EEF5', 
            borderRadius: '8px', 
        },
        '&:hover fieldset': {
            borderColor: '#E9EEF5', 
        },
        '&.Mui-focused fieldset': {
            borderColor: '#4F46E5', 
        },
    },
    width: '100%', 
    maxWidth: '350px', 
    margin: '10px 0',
});
export const InputBox = styled(Box)({
    marginTop:'3rem',
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    width: '100%', 
})
export const SubmitButton = styled(Button)({
    backgroundColor: '#4F46E5', 
    color: '#fff', 
    borderRadius: '8px', 
    padding: '7px 20px', 
    marginTop: '2rem', 
    width: '100%', 
    maxWidth: '350px',
    textTransform:'capitalize',
    '&:hover': {
        backgroundColor: '#4F46E5', 
    },
    fontSize: '16px',
    fontWeight: '500',
})
export const LogoBox = styled(Box)({
    width: '100%',
    padding: '0.5rem 2rem', 
    marginBottom:'2rem', 
    display: 'flex',
    justifyContent: 'start',
    gap:'1rem',
    alignItems: 'center',
    '@media (max-width: 800px)': {
        padding: '0.5rem 1rem', 
    },
})
export const LogoBox2 = styled(Box)({
    width: '100%', 
    display: 'flex',
    paddingBottom:'1rem', 
    justifyContent: 'end',
    gap:'0.5rem',
    alignItems: 'center',
})