import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Melike", password: "zafer" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (user) {
        // Eğer kullanıcı giriş yaptıysa
        return "/admin"; // Giriş yaptıktan sonra /admin sayfasına yönlendir
      } else if (account.provider === "credentials") {
        // Eğer giriş credentials (kullanıcı adı/şifre) ile yapıldıysa
        return "/admin"; // Giriş yaptıktan sonra /admin sayfasına yönlendir
      } else {
        // Diğer giriş yöntemleri için varsayılan olarak '/' sayfasına yönlendir
        return "/";
      }
    },
  },
};
