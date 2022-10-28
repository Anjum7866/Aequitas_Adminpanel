import { styled } from "@mui/system";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";


const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const DashboardLayoutWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100vh",
  display: "flex",
  overflow: "hidden",
 paddingTop:0,
  [theme.breakpoints.up("lg")]: {
   // paddingLeft: 256,
  },
}));

const DashboardLayoutContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderTopLeftRadius: "20px",
  display: "flex",
  overflow: "hidden",
}));

const DashboardLayoutContent = styled("div")({
  borderTopLeftRadius: "20px",
  height: "100%",
  overflow: "auto",
  borderWidth: "0",
  width: "100vw",
  padding:'130px 32px',
  background:'#EBF1FA'
});

const DashboardLayout = (props) => {
  return (
    <DashboardLayoutRoot>
      <NavBar/>
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
            {props.children}
            </DashboardLayoutContent>
            <Footer/>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
