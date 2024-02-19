import { Text, View, TouchableOpacity, Platform } from "react-native";

// icons
import {MaterialIcons} from "@expo/vector-icons"

function CustomTab({state, descriptors, navigation}) {
    // margem especifica para ios
    const IosMarginBottomClass = Platform.OS === "ios" ? "mb-[30px]" : 'mb-[24px]';
  return (
    <View className="justify-center items-center ">

        <View className={`flex-row pt-2 gap-7 ${IosMarginBottomClass}`}>

        {state.routes.map((route, index) => {
            const {options} = descriptors[route.key]

            const isFocused = state.index === index

            const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name, route.params);
                }
            };

            const onLongPress = () => {
                navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
            };
            return (
                <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    className="p-2"
                >

                    <View>
                        <View>
                            <MaterialIcons name={options.tabBarIcon} size={30} color={isFocused? "#5228A5" : "#535353"} />
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })}
    </View>
    </View> 
  )
}

export default CustomTab;