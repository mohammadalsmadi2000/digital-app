import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "./../constants/Layout";
import Colors from "./../constants/Colors";
import UserPartials from "./../components/UserPartials";

const getHeight = () =>
  Layout.window.height <= 667
    ? Layout.window.height / 2.8
    : Layout.window.height / 2.3;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ScrollView = styled.ScrollView``;

const Image = styled.Image`
  width: ${Layout.window.width};
  height: ${getHeight()};
  position: relative;
`;

const DataContainer = styled.View`
  padding-horizontal: 20px;
`;

const TimeLocation = styled.Text`
  color: ${Colors.greyColor};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const NamePrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const NamePriceText = styled.Text`
  font-size: 24px;
  color: ${Colors.blackColor};
  font-weight: 600;
`;

const Divider = styled.View`
  width: 100%;
  height: 2px;
  background-color: rgba(151, 151, 151, 0.1);
  margin-bottom: 25px;
`;

const Description = styled.Text`
  margin-bottom: 25px;
  color: ${Colors.greyColor};
`;

const ReadMore = styled.Text`
  color: ${Colors.blackColor};
  margin-bottom: 40px;
`;

const ProductScreenPresenter =({

  product
}) =>  (
  <Container>
    <StatusBar barStyle="light-content" />
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }} bounces={false}>
      <Swiper
        style={{ height: getHeight(), marginBottom: 20 }}
        activeDotColor="white"
        dotColor="rgba(255, 255, 255, 0.3)"
      >
        <Image
          source={{
            uri:
              product.imagep
          }}
        />

      </Swiper>
      <DataContainer>
        <TimeLocation>{product.title}</TimeLocation>
        <NamePrice>
        </NamePrice>
        <Divider />
        <Description>
{product.data}
        </Description>
        <Description>

        </Description>

      </DataContainer>
    </ScrollView>
  </Container>
);

export default ProductScreenPresenter;
