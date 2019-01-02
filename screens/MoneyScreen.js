import React from 'react'
import PropsType from 'prop-types'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import updateItems, { resetItems } from '../redux/actions/item-action'


const sumPrice = arr => arr.reduce((total, num) => total + +num.prise, 0)

const mapToProps = ({ items }) => ({ items })
const dispatchToProps = dispatch => ({
  updateItems: bindActionCreators(updateItems, dispatch),
  resetItems: bindActionCreators(resetItems, dispatch),
})

@connect(mapToProps, dispatchToProps)
export default class extends React.Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    items: PropsType.object.isRequired,
    updateItems: PropsType.func.isRequired,
    resetItems: PropsType.func.isRequired,
  }

  state = {
    text: '',
  }

  onChange = (text) => {
    this.setState({ text })
  }

  onPush = () => {
    const { text } = this.state
    const { data } = this.props.items
    const spit = text.split(':')


    if (text !== '' && spit[0] && spit[1]) {
      data.push({ title: spit[0], prise: +spit[1], lineText: false })
      this.props.updateItems('data', data)
      this.setState({ text: '' })
    }
  }

  onSelect = (index) => {
    const { data } = this.props.items
    const newMap = data.map((d, i) => ((i === index && d.lineText !== undefined)
      ? { ...d, lineText: !d.lineText }
      : { ...d }))
    this.props.updateItems('data', newMap)
  }

  render() {
    const { text } = this.state
    const { data } = this.props.items

    const styles = lineStyle => ({
      textDecorationLine: lineStyle ? 'line-through' : 'none',
      color: lineStyle ? 'red' : 'black',
    })


    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={{
            marginTop: 30,
            marginHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>วิธีเก็บเงิน</Text>
            <Text>แบ่งเป็น 6 กอง [55, 10, 10, 10, 10, 5]</Text>
            <Text>55 : ค่าใช้จ่ายชีวิตประจำวัน</Text>
            <Text>10 : ใช้ตามใจ</Text>
            <Text>10 : ลงทุน</Text>
            <Text>10 : การศึกษาเพิ่มเติม</Text>
            <Text>10 : เงินเก็บฉุกเฉิน</Text>
            <Text>5  : บริจาค</Text>
          </View>
          <View style={{ flex: 2 }}>

            <View style={{
              flex: 5,
              paddingHorizontal: 20,
              paddingTop: 15,
              paddingBottom: 15,
              overflow: 'hidden',
            }}
            >
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  position: 'absolute',
                  right: 10,
                  zIndex: 1,
                }}
              >
                <View
                  style={{
                    position: 'relative',
                    right: 0,
                  }}
                >
                  <Text style={{ fontSize: 20, color: 'orange' }}>
                    {`${sumPrice(data)} บาท`}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'green',
                    position: 'relative',
                    right: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    opacity: 0.5,
                    borderRadius: 100,
                  }}
                  onPress={this.props.resetItems}
                >
                  <Text style={{ fontSize: 10, color: 'white' }}>Clear All</Text>
                </TouchableOpacity>
              </View>

              <ScrollView>
                {
                  data.map((d, i) => (
                    <TouchableOpacity
                      onPress={() => this.onSelect(i)}
                      key={`${d + i}`}
                      style={{
                        flexDirection: 'row',
                        marginBottom: 5,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}
                    >
                      <Text style={styles(d.lineText)}>{d.prise}</Text>
                      { d.prise && <Text style={styles(d.lineText)}> : </Text> }
                      <Text style={styles(d.lineText)}>{d.title}</Text>
                    </TouchableOpacity>
                  ))
                }
              </ScrollView>
            </View>

            <View style={{ justifyContent: 'flex-end' }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <TextInput
                  style={{
                    flex: 1,
                    borderTopColor: '#ccc',
                    backgroundColor: 'white',
                    borderTopWidth: 1,
                    height: 45,
                    paddingLeft: 10,
                  }}
                  onChangeText={this.onChange}
                  value={text}
                />
                <TouchableOpacity
                  onPress={this.onPush}
                  style={{ width: 45, height: 45, backgroundColor: '#ccc' }}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}
