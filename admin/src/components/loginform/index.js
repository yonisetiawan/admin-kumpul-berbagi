import React, {Component} from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Form, Item, Input, Text } from 'native-base';

export default class LoginForm extends Component {
    render() {
        return (
            <Container style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Header style={{width: '100%'}}>
                    <Left>
                      <Button transparent>
                          <Icon name='menu' />
                      </Button>
                    </Left>
                    <Body>
                        <Title>Sign in</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{ marginTop: 20}}>
                    <Form>
                        <Item>
                            <Input placeholder="Username"/>
                        </Item>
                        <Item last>
                            <Input placeholder="Password" secureTextEntry={true} autoCorrect={false}/>
                        </Item>
                    </Form>
                    <Button block info style={{width: 300}}>
                      <Text>Sign in</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}
