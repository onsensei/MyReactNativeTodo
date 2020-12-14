import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Divider, List, ListItem, Text, Button, Modal, Card } from '@ui-kitten/components';
import { Icon } from 'react-native-eva-icons';
import { connect, useSelector } from 'react-redux'


import styles from './list.style'




export function ListItemTodo() {
    const data = useSelector(state => state.data)

    function deleteItem(item, index) {
        // Alert.alert(item.title)
        setSelectedItem(item)
        setVisible(true)
    }

    const renderItemAccessory = (item, index) => {
        // console.log(item, index)
        return <Button size='tiny' onPress={() => deleteItem(item, index)}>FOLLOW</Button>
    };

    const renderItemIcon = (props) => (
        <Icon {...props} name="github" fill="white" />
    );

    const renderItem = ({ item, index }) => (
        <ListItem
            title={`${item.title}`}
            description={`${item.description}`}
            style={styles.itemStyle}
            accessoryLeft={renderItemIcon}
            accessoryRight={() => renderItemAccessory(item, index)}
        />
    );

    const [visible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState('')




    return (
        <View>
            <List
                // style={styles.container}
                data={data}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
            />
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    <Text>Delete {selectedItem.title}</Text>
                    <Button onPress={() => setVisible(false)} style={styles.modalButton}>
                        Delete
                    </Button>
                    <Button onPress={() => setVisible(false)}>
                        Cancel
                    </Button>
                </Card>
            </Modal>

        </View>
    );
};

const mapStateToProps = (state) => {
    console.log('mapStateToProps HomePage:')
    console.log(state)
    return {
        data: state.data
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ListItemTodo)

