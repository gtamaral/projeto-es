import { KeyboardAvoidingView, Modal as RNModal, Platform, View } from "react-native"

export default function Modal({isOpen, withInput, children, ...rest}) {
    const content = withInput ? (
        <KeyboardAvoidingView
            className="items-center justify-center flex-1 px-3 bg-zinc-900/90"
            behavior={Platform.OS === "ios" ? 'padding' : 'height'}
        >
            {children}
        </KeyboardAvoidingView>
    ) : (
        <View className="items-center justify-center flex-1 px-3 bg-zinc-900/80">
            {children}
        </View>
    )

  return (
    <RNModal
     visible={isOpen}
     transparent
     animationType="fade"
     statusBarTranslucent
     {...rest}
    >
        {content}
    </RNModal>
  )
}
