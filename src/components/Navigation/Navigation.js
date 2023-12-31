import React from "react";
import { Link } from "react-router-dom";
import { Container, NavigationWrapper, List } from "./Navigation.css";
import { useTranslation } from "react-i18next";

function Navigation({ items = [], RightElement }) {
    const {t} = useTranslation();
    return (
        <Container>
            <NavigationWrapper>
                <List>
                    {items.map( item => (
                        <li key={item.to}>
                            <Link to={item.to}>{t(item.content)}</Link>
                        </li>
                    ))}
                </List>
                {RightElement}
            </NavigationWrapper> 
        </Container>
    )
}

export default Navigation;