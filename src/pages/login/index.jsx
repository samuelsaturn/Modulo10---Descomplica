import React, { useState, useEffect } from 'react';
import { Grid, Card, CardHeader, CardContent, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Login = () => {
	const [login, setLogin] = useState('');
	return (
		<Grid container spacing={2}>
			<Card sx={style}>
				<CardHeader
					title="Tarefas"
					subheader="Cadastro de Tarefas"
				/>
				<CardContent sx={{
					width: '95%',
					maxWidth: '100%',
				}}>
		<Grid item xs={12}>
			<FormControl fullWidth>
				<Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
				<FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
			</FormControl>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
}

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '60%',
	bgcolor: 'background.paper',
	p: 4,
};
export default Login;
