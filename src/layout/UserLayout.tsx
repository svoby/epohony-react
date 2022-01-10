import React, { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SideMenuNav from '../components/SideMenu/SideMenuNav'
import SideMenuTitle from '../components/SideMenu/SideMenuTitle'
import ShopContext from '../context/ShopContext'
import { ActionType, ICategory } from '../global.types'
import { Col, Container, Row, Spacer } from './Grid'

const dataUserMenu: ICategory[] = [
    {
        id: "info", attributes: { title: "Osobní údaje", path: "/user" }
    },
    {
        id: "orders", attributes: { title: "Moje objednávky", path: "/user" }
    }
]

const UserLayout: FC = ({ children }) => {

    const { cart, dispatch } = useContext(ShopContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({
            type: ActionType.USER_LOGOUT
        })
        navigate("/")
    }

    return (
        <>
            <Spacer size="py-4" />
            <Container>
                <Row>
                    <Col size="col-lg-3 order-1 order-lg-0">
                        <div className="pr-md-4">
                            <SideMenuTitle title="Kategorie" />
                            <SideMenuNav items={dataUserMenu} />
                            <Spacer size="pt-4 pt-md-5" />
                            {cart.user &&
                                <>
                                    <SideMenuTitle title="Odhlášení" />
                                    <button className='btn btn-outline-danger btn-block' onClick={handleLogout}>
                                        Odhlásit se
                                    </button>
                                </>
                            }
                        </div>
                    </Col>
                    {children}
                </Row>
            </Container>
        </>
    )
}

export default UserLayout
