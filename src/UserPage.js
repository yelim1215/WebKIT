import React from "react";
import { userupdate } from "./service/ApiService";
import {
    Button,
    TextField,
    Link,
    Grid,
    Container,
    Typography,
} from "@material-ui/core";

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);
    }

    render() {
        return (
            <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
                <form noValidate onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h5">
                                회원정보 수정
                            </Typography>
                            <p></p>
                            email은 수정이 불가합니다.
                        </Grid>
                        <Grid item xs={12}>
                            사용자 이름
                            <TextField
                                autoComplete="username"
                                name="username"
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            패스워드
                            <TextField
                                autoComplete="current-password"
                                name="password"
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                회원정보 수정
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                수정을 중단하시겠습니까?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        );
    }
}

export default UserPage