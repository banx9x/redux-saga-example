interface AuthResponse {
    status: boolean;
    data: User;
}

interface User {
    userId: number;
    firstname: string;
    lastname: string;
    avatar: string;
}

interface Auth {
    loading: boolean;
    isLoggedIn: boolean;
    currentUser: User | null;
}
