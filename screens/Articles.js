import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ListView,
  ImageBackground,
  Dimensions
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
//argon
import { articles, Images, argonTheme } from "../theme/constants/";
import { Card } from "../theme/components/";

const { width } = Dimensions.get("screen");
import { firebaseApp } from '../firebase'
import { NavigationActions } from 'react-navigation'
import { observer,inject } from 'mobx-react/native'
import firebase from 'firebase'

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Digital Team",
    description:
      "سَنمضي قريباً بأمرِ القَدر ، وَنغدو رُفاتاً ويَبقى الأثر",
    image:
      "https://i.imgsafe.org/02/02699e1903.jpeg",
    price: ""
  },
  {
    title: "Events",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
    price: "$35"
  }
];
import _ from 'lodash'

@inject("appStore") @observer

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      counter: 1,
  title:'',info:'',items: [],
         isLoading: true,data:[],data1:[],
         puid:'',empty:true,dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
         isEmpty: false,
         isFinished: false,
    };
    this.itemsRef = this.getRef()
    this.itemsRef1 = this.getRef1()

    }
    getRef() {
      const uid = this.props.appStore.uid
      const name = this.props.appStore.username

       return firebaseApp.database().ref('article' );
     }
     getRef1() {
       const uid = this.props.appStore.uid
       const name = this.props.appStore.username

        return firebaseApp.database().ref('hot' );
      }
     listenForItems(itemsRef) {
       itemsRef.on('value', (snap) => {

         // get children as an array
         var items = [];
         snap.forEach((child) => {
           console.log('dfdsfsdfdsfsdfsdfsdfsdfs---------------'+child.val().title);
           items.push({
             title: child.val().title,
             imagep: child.val().imagep,
             data: child.val().data,

           });

                  this.setState({
              empty:false,a:child.val().title,b:child.val().b,c:child.val().c,ag:child.val().ag,bg:child.val().bg,cg:child.val().cg
                  });
         });

         this.setState({
      data:items
         });

       });
     }

  componentDidMount() {
    const uid = this.props.appStore.uid
    const name = this.props.appStore.username

this.listenForItems(this.itemsRef);
this.itemsRef.on('value', (snapshot) => {
        let data = snapshot.val();
        let items = Object.values(data);
        this.setState({items});
     });
     this.itemsRef1.on('value', (snapshot) => {
             let data = snapshot.val();
             let items1 = Object.values(data);
             this.setState({items1});
          });
    }
    _renderRow1 = (data, sectionID, rowID) => {
   //console.log("TIMELINE :::: _renderRow " + data.title)

   return (
     <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Albums',{title:data.albums,puids:data.puid})}} style={{borderWidth: 1,borderColor: "#dddddd",borderRadius: 13,alignItems: 'center',justifyContent: "center",padding: 30,marginHorizontal: 10}}>
     <Text style={{fontSize: 18}}>
     {data.title}
     </Text>
     </TouchableOpacity>
   )
 }
  renderProduct = (item, index) => {
    const { navigation } = this.props;
if(item.agree)
    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`product-${item.title}`}
        onPress={() => navigation.navigate("Onboarding", { product: item })}
      >
        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={{ uri: item.imagep }}
          />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productPrice}
            >
              {item.title}
            </Text>
            <Text center size={34}>
              {item.title}
            </Text>

          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };
  renderc = (item) => {
    const { navigation } = this.props;
if(item.agree)
    return (
      <Block flex>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block flex row>
            <Card
              item={item}
              style={{ marginRight: theme.SIZES.BASE }}
            />
          </Block>
          </Block>

        </Block>
    );
  };

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Digital News
        </Text>
        <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
            contentContainerStyle={{
              paddingHorizontal: theme.SIZES.BASE / 2
            }}
          >
          {this.state.items1 &&

            this.state.items1.map((item, index) =>
              this.renderProduct(item, index)
            )}

          </ScrollView>
        </Block>
        <Block flex>
        {this.state.items &&

          this.state.items.map((item, index) =>
            this.renderc(item, index)
          )}

        </Block>
      </Block>
    );
  };

  renderAlbum = (data) => {
    const { navigation } = this.props;

    return (
      <Block
        flex
        style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}
      >
        <Text bold size={16} style={styles.title}>
          Album
        </Text>
        <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
          <Block flex right>
            <Text
              size={12}
              color={theme.COLORS.PRIMARY}
              onPress={() => navigation.navigate("Home")}
            >
              View All
            </Text>
          </Block>
          <Block
            row
            space="between"
            style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          >
            {Images.Viewed.map((img, index) => (
              <Block key={`viewed-${img}`} style={styles.shadow}>
                <Image
                  resizeMode="cover"
                  source={{ uri: img }}
                  style={styles.albumThumb}
                />
              </Block>
            ))}
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {this.renderCards()}

  <ListView
        automaticallyAdjustContentInsets={false}
        initialListSize={1}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow1}
      />
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE
    // paddingBottom: theme.SIZES.BASE * 2,
  }
});

export default Articles;
