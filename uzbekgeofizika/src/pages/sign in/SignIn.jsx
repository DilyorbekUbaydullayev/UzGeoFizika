import React, { useState } from 'react';
import { Box, Grid, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle, Lock } from '@mui/icons-material';
import { Right, Left, Title, Title2, Input, InputBox, SubmitButton, Title3, FooterBox, LogoBox, LogoBox2, LeftBox } from './styled';
import logo from '../../assets/logo.png'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={8} sm={6} md={8} display={{ xs: 'none', sm: 'block' }}>
          <Right>
            <LogoBox>
              <img
                alt="Logo"
                src={logo}
                style={{ height: '48px', marginTop:'24px' }}
              />
              <Title sx={{fontSize:20}}>"UZBEKGEOFIZIKA" AJ</Title>
            </LogoBox>
          </Right>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Left>
          <LeftBox>
          <LogoBox2 >
              <img
                alt="Logo"
                src={logo}
                style={{ height: '48px', marginTop:'24px' }}
              />
              <Title sx={{fontSize:18}}>"UZBEKGEOFIZIKA" AJ</Title>
            </LogoBox2>
            <Box>
              <Title>Xush kelibsiz</Title>
              <Title2>Davom etish uchun login va parol kiriting</Title2>
            </Box>
            <InputBox>
              <Input
                id="outlined-basic"
                size="small"
                type="text"
                placeholder="Login"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <Input
                id="outlined-password"
                size="small"
                type={showPassword ? 'text' : 'password'}
                placeholder="Parol"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <SubmitButton size='small'>Kirish</SubmitButton>
            </InputBox>
            
          </LeftBox>
          <FooterBox>
              <Title3>uzbekgeofizika.uz | +998 77 777 77 77</Title3>
            </FooterBox>
          </Left>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;