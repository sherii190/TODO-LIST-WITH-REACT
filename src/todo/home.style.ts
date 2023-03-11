import { mergeStyleSets } from "@fluentui/react";
import { IProcessedStyleSet, IStyle } from "@fluentui/react/lib/Styling"

interface IHomeStyle{
todoContainer : IStyle
}

const HomeStyle: IProcessedStyleSet<IHomeStyle> = mergeStyleSets({
  todoContainer: {
    width: "50%",
    height: "80%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    
  },
})


export default HomeStyle;