import {clsx} from "clsx";
import { Pressable, Text } from "react-native";

const CategoryButton = ({title, isSelected, ...rest}) => {
    return (
        <Pressable className={
            clsx("bg-[#3a1d73] px-4 justify-center rounded-md h-10",
            isSelected && "border-2 border-white-400 bg-[#26134a]")
            } {...rest}>   
            
            <Text className='text-slate-100 font-subtitle text-sm'>
                {title}
            </Text>

        </Pressable>
    )

}

export default CategoryButton;