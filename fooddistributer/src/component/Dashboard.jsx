import { Container } from "react-bootstrap";
import { Header } from "./Header";
import { ProductSlider } from "../pages/ProductSlider.js";
import FruitsSection from "../pages/FruitsSection";
import VegetablesSection from "../pages/VegetablesSection.js";

export function Dashboard(){
    return (
        <Container>
        <ProductSlider/>
       <FruitsSection></FruitsSection>
       <VegetablesSection></VegetablesSection>
            
        </Container>
    );
}