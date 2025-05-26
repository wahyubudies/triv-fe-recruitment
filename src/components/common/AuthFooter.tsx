import Container from "./Container";

const AuthFooter = () => {
   return (
      <Container className="pb-6">
         <span className="text-xs text-gray-400">&copy; Copyright {new Date().getFullYear()} by Wahyu Budi</span>
      </Container>
   );
};

export default AuthFooter;