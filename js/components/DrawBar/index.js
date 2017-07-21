import React from "react";
import { AppRegistry, Image, TouchableOpacity } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = [{route:"Home",title:"我的活动"}, {route:"MyToDo",title:"我的待办"}, {route:"MyDone",title:"我的已办"}
,{route:"MyScores",title:"我的积分"},{route:"Setting",title:"设置"},{route:"About",title:"关于"}];
export default class DrawBar extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={require("../../../images/drawer-cover.png")}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: 120,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center",
                marginLeft:20
              }}
              onPress={() => this.props.navigation.navigate("DrawerClose")}
            >
              <Image
                square
                style={{ height: 80, width: 70,
                alignSelf: "stretch"}}
                source={require("../../../images/logo.png")}
              />
            </TouchableOpacity>
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.route)}
                >
                  <Text>{data.title}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
