// 'use client';
// import React from 'react';
// import { TextField, Button, Container, Typography, Box } from '@mui/material';
// import { useFormik } from 'formik';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// export default function Signin() {
//     const router = useRouter();

//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//         },
//         onSubmit: async (values) => {
//             try {
//                 const response = await axios.post('https://linked-posts.routemisr.com/users/signin', values);
//                 if (response.data.message === 'success') {
//                     // Assuming the token is in response.data.token
//                     const token = response.data.token;
//                     // Store the token in localStorage
//                     localStorage.setItem('token', token);
//                     // Navigate to the home page or another route
//                     router.push('/home'); // Replace '/home' with your target route
//                 }
//             } catch (error) {
//                 console.error('Login failed:', error);
//             }
//         },
//     });

//     return (
//         <Container maxWidth="sm">
//             <Box  marginBottom={11} mt={5}>
//                 <Typography variant="h4" gutterBottom>
//                     Sign In
//                 </Typography>
//                 <form onSubmit={formik.handleSubmit}>
//                     <Box mb={2}>
//                         <TextField
//                             fullWidth
//                             variant="outlined"
//                             label="Email"
//                             name="email"
//                             onChange={formik.handleChange}
//                             value={formik.values.email}
//                         />
//                     </Box>
//                     <Box mb={2}>
//                         <TextField
//                             fullWidth
//                             variant="outlined"
//                             label="Password"
//                             name="password"
//                             type="password"
//                             onChange={formik.handleChange}
//                             value={formik.values.password}
//                         />
//                     </Box>
//                     <Button color="primary" variant="contained" type="submit" fullWidth>
//                         Sign In
//                     </Button>
//                 </form>
//             </Box>
//         </Container>
//     );
// }


'use client';
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Signin() {
    const router = useRouter();
    const [loading, setLoading] = useState(false); // حالة التحميل

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            setLoading(true); // بدء عملية التحميل
            try {
                const response = await axios.post('https://linked-posts.routemisr.com/users/signin', values);
                if (response.data.message === 'success') {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    router.push('/home');
                }
            } catch (error) {
                console.error('Login failed:', error);
            } finally {
                setLoading(false); // إيقاف حالة التحميل بغض النظر عن نجاح أو فشل الطلب
            }
        },
    });

    return (
        <Container maxWidth="sm">
            <Box marginBottom={11} mt={5}>
                <Typography variant="h4" gutterBottom>
                    Sign In
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </Box>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        fullWidth
                        disabled={loading} // تعطيل الزر أثناء التحميل
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
                    </Button>
                </form>
            </Box>
        </Container>
    );
}
