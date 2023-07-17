"use strict";(self.webpackChunkmui_adaptive_card=self.webpackChunkmui_adaptive_card||[]).push([[581],{"./src/component/adaptive.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Accordian:function(){return Accordian},Cards:function(){return Cards},Default:function(){return Default},Form:function(){return Form},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return adaptive_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Typography=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@mui/material/Typography/Typography.js")),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Link=__webpack_require__("./node_modules/@mui/material/Link/Link.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),Table=__webpack_require__("./node_modules/@mui/material/Table/Table.js"),TableBody=__webpack_require__("./node_modules/@mui/material/TableBody/TableBody.js"),TableCell=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),TableContainer=__webpack_require__("./node_modules/@mui/material/TableContainer/TableContainer.js"),TableRow=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function FactSet(items){return(0,jsx_runtime.jsx)(TableContainer.Z,{component:Paper.Z,className:"sm-margin",children:(0,jsx_runtime.jsx)(Table.Z,{size:"small","aria-label":"Fact Set",children:(0,jsx_runtime.jsx)(TableBody.Z,{children:items.items.map((function(row){return(0,jsx_runtime.jsx)(TableRow.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:Object.keys(row).map((function(key){return(0,jsx_runtime.jsx)(TableCell.Z,{children:row[key]},key)}))},row.name)}))})})})}function Container(_ref){var items=_ref.items;return(0,jsx_runtime.jsx)("div",{className:"adaptive-container sm-margin",children:items.map((function(component){return componentHandler(component)}))})}FactSet.__docgenInfo={description:"",methods:[],displayName:"FactSet"},Container.__docgenInfo={description:"",methods:[],displayName:"Container"};var container=Container,Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js");function ColumnSet(_ref){var columns=_ref.columns;return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,className:"sm-margin",children:columns.map((function(column,index){return(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,xs:null==column?void 0:column.xsWidth,lg:null==column?void 0:column.lgWidth,justifyContent:null==column?void 0:column.justifyContent,alignItems:null==column?void 0:column.justifyContent,children:column.body.map((function(item){return componentHandler(item)}))},index)}))})}ColumnSet.__docgenInfo={description:"",methods:[],displayName:"ColumnSet"};var column=ColumnSet,Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),esm=__webpack_require__("./node_modules/@mui/icons-material/esm/index.js"),_excluded=["name"],Icon=function Icon(_ref){var name=_ref.name,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),IconComponent=esm[name];return IconComponent?(0,jsx_runtime.jsx)(IconComponent,(0,objectSpread2.Z)({},rest)):null};Icon.__docgenInfo={description:"",methods:[],displayName:"Icon"};var component_icon=Icon;function AvatarIcon(_ref){var icon=_ref.icon;return(0,jsx_runtime.jsx)(Avatar.Z,{children:(0,jsx_runtime.jsx)(component_icon,{name:icon})})}AvatarIcon.__docgenInfo={description:"",methods:[],displayName:"AvatarIcon"};var Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js");function Stacked(_ref){var _item$body,item=_ref.item;return(0,jsx_runtime.jsx)(Stack.Z,{spacing:null==item?void 0:item.spacing,children:null==item||null===(_item$body=item.body)||void 0===_item$body?void 0:_item$body.map((function(item,index){return componentHandler(item)}))})}Stacked.__docgenInfo={description:"",methods:[],displayName:"Stacked"};var FormGroup=__webpack_require__("./node_modules/@mui/material/FormGroup/FormGroup.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),Checkbox=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js");function Checkboxes(_ref){var checkboxes=_ref.checkboxes;return console.log(checkboxes),(0,jsx_runtime.jsx)(FormGroup.Z,{children:checkboxes.map((function(checkbox){return(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(Checkbox.Z,{defaultChecked:!(null==checkbox||!checkbox.checked)}),label:checkbox.text})}))})}Checkboxes.__docgenInfo={description:"",methods:[],displayName:"Checkboxes"};var Radio=__webpack_require__("./node_modules/@mui/material/Radio/Radio.js"),RadioGroup=__webpack_require__("./node_modules/@mui/material/RadioGroup/RadioGroup.js"),FormControl=__webpack_require__("./node_modules/@mui/material/FormControl/FormControl.js"),FormLabel=__webpack_require__("./node_modules/@mui/material/FormLabel/FormLabel.js");function RadioButtonsGroup(_ref){var body=_ref.body;return console.log(body),(0,jsx_runtime.jsxs)(FormControl.Z,{children:[(0,jsx_runtime.jsx)(FormLabel.Z,{id:"demo-radio-buttons-group-label",children:null==body?void 0:body.label}),(0,jsx_runtime.jsx)(RadioGroup.Z,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:null==body?void 0:body.defaultValue,name:null==body?void 0:body.inputName,children:body.items.map((function(item){return(0,jsx_runtime.jsx)(FormControlLabel.Z,{value:null==item?void 0:item.value,control:(0,jsx_runtime.jsx)(Radio.Z,{size:null==body?void 0:body.size}),label:null==item?void 0:item.label})}))})]})}RadioButtonsGroup.__docgenInfo={description:"",methods:[],displayName:"RadioButtonsGroup"};var Accordion=__webpack_require__("./node_modules/@mui/material/Accordion/Accordion.js"),AccordionSummary=__webpack_require__("./node_modules/@mui/material/AccordionSummary/AccordionSummary.js"),AccordionDetails=__webpack_require__("./node_modules/@mui/material/AccordionDetails/AccordionDetails.js"),ExpandMore=__webpack_require__("./node_modules/@mui/icons-material/ExpandMore.js");function AccordionGroup(_ref){var body=_ref.body;return console.log(body),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:body.map((function(item,index){return(0,jsx_runtime.jsxs)(Accordion.Z,{children:[(0,jsx_runtime.jsx)(AccordionSummary.Z,{expandIcon:(0,jsx_runtime.jsx)(ExpandMore.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,jsx_runtime.jsx)(Typography.Z,{children:null==item?void 0:item.title})}),(0,jsx_runtime.jsx)(AccordionDetails.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{children:null==item?void 0:item.details})})]})}))})}AccordionGroup.__docgenInfo={description:"",methods:[],displayName:"AccordionGroup"};var TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js");function TextFields(_ref){var item=_ref.item;return(0,jsx_runtime.jsx)(TextField.Z,{className:"sm-margin",id:"outlined-basic",label:null==item?void 0:item.label,variant:"outlined",fullWidth:null==item?void 0:item.fullWidth,multiline:null==item?void 0:item.multiline,rows:null==item?void 0:item.rows})}TextFields.__docgenInfo={description:"",methods:[],displayName:"TextFields"};var Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js");function AdaptiveCard(_ref){var body=_ref.body;return(0,jsx_runtime.jsx)(Card.Z,{className:"sm-margin",children:(0,jsx_runtime.jsx)("div",{className:"adaptive-card-container",children:body.map((function(component){return componentHandler(component)}))})})}AdaptiveCard.__docgenInfo={description:"",methods:[],displayName:"AdaptiveCard"};var component_adaptive_card=AdaptiveCard;function componentHandler(item){switch(item.type){case"TextBlock":return(0,jsx_runtime.jsx)(Typography.Z,{fontWeight:null==item?void 0:item.fontWeight,variant:null==item?void 0:item.variant,paragraph:!0,children:item.text});case"Stack":return console.log(item.body),(0,jsx_runtime.jsx)(Stacked,{item:item});case"Button":return(0,jsx_runtime.jsx)(Button.Z,{variant:null==item?void 0:item.variant,size:null==item?void 0:item.size,href:null==item?void 0:item.href,children:item.text});case"Link":return(0,jsx_runtime.jsx)(Link.Z,{variant:null==item?void 0:item.variant,href:null==item?void 0:item.href,children:item.text});case"FactSet":return(0,jsx_runtime.jsx)(FactSet,{items:item.body});case"Card":return(0,jsx_runtime.jsx)(component_adaptive_card,{body:item.items});case"Divider":return(0,jsx_runtime.jsx)(Divider.Z,{});case"Container":return(0,jsx_runtime.jsx)(container,{items:item.items});case"ColumnSet":return(0,jsx_runtime.jsx)(column,{columns:item.columns});case"AvatarIcon":return(0,jsx_runtime.jsx)(AvatarIcon,{icon:item.icon});case"Checkboxes":return(0,jsx_runtime.jsx)(Checkboxes,{checkboxes:null==item?void 0:item.Checkboxes});case"RadioGroup":return(0,jsx_runtime.jsx)(RadioButtonsGroup,{body:item});case"TextField":return(0,jsx_runtime.jsx)(TextFields,{item:item});case"AccordianGroup":return(0,jsx_runtime.jsx)(AccordionGroup,{body:item.body});default:return(0,jsx_runtime.jsx)("p",{children:"no element"})}}function Adaptive(_ref){var adaptiveJson=_ref.adaptiveJson;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:null==adaptiveJson?void 0:adaptiveJson.body.map((function(component){return componentHandler(component)}))})}componentHandler.__docgenInfo={description:"",methods:[],displayName:"componentHandler"},Adaptive.__docgenInfo={description:"",methods:[],displayName:"Adaptive"};var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Form$parameters,_Form$parameters2,_Form$parameters2$doc,_Accordian$parameters,_Accordian$parameters2,_Accordian$parameters3,_Cards$parameters,_Cards$parameters2,_Cards$parameters2$do,adaptive=Adaptive,mockTestBlock=function mockTestBlock(text){return{type:"TextBlock",text:text,fontWeight:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",variant:arguments.length>2&&void 0!==arguments[2]?arguments[2]:""}},mockAccordian=function mockAccordian(text,details){return{title:text,details:details}},mockAccordianGroup={type:"AccordianGroup",body:[mockAccordian("Accordian 1","Accordian details"),mockAccordian("Accordian 2","Accordian details")]},mockTextField=function mockTextField(label){return{type:"TextField",label:label,fullWidth:arguments.length>1&&void 0!==arguments[1]&&arguments[1],multiline:arguments.length>2&&void 0!==arguments[2]&&arguments[2],rows:arguments.length>3&&void 0!==arguments[3]?arguments[3]:2}},mockColumnSet={type:"ColumnSet",columns:[{type:"Column",justifyContent:"center",alignItems:"center",xsWidth:"3",body:[{type:"AvatarIcon",icon:"Cake"}]},{type:"Column",xsWidth:"9",body:[{type:"Stack",spacing:0,body:[mockTestBlock("Card Header","bold","body1"),mockTestBlock("Some content here","","body1")]}]}]},mockCard={type:"Card",items:[mockColumnSet,mockAccordianGroup]},adaptiveJson={type:"AdaptiveJson",version:"1.0",body:[{type:"Card",items:[mockColumnSet,{type:"Container",items:[{type:"FactSet",body:[{key:"Key 1",value:"Value 1"},{key:"Key 2",value:"Value 2"},{key:"Key 3",value:"Value 3"}]},{type:"Button",text:"Container",variant:"outline",size:"small"}]},mockTestBlock("Actions","bold","body1"),{type:"Stack",spacing:1,body:[{type:"Link",text:"Link example",href:"https://www.google.com"},{type:"Link",text:"Link example 1",href:"https://www.google.com"},{type:"Link",text:"Link example 2",href:"https://www.google.com"},{type:"Link",text:"Link example 3",href:"https://www.google.com"}]}]}]},form_form={type:"AdaptiveJson",version:"1.0",body:[{type:"Card",items:[{type:"Container",items:[mockTestBlock("Example form","bold"),mockTextField("Placeholder"),mockTextField("Placeholder full width",!0),mockTextField("Placeholder multiline",!0,!0,4),{type:"Checkboxes",Checkboxes:[{text:"checkbox 1",checked:!0},{text:"checkbox 2",checked:!1},{text:"checkbox 3"}]},{type:"RadioGroup",label:"Radio label",defaultValue:"value 1",size:"small",items:[{value:"value 1",label:"label 1"},{value:"value 2",label:"label 2"},{value:"value 3",label:"label 3"}]}]}]}]},adaptive_stories={component:adaptive,title:"Adaptive",tags:["autodocs"]},Default={args:{adaptiveJson:adaptiveJson}},Form={args:{adaptiveJson:form_form}},Accordian={args:{adaptiveJson:{type:"AdaptiveJson",version:"1.0",body:[{type:"Card",items:[mockAccordianGroup]}]}}},Cards={args:{adaptiveJson:{type:"AdaptiveJson",version:"1.0",body:[{type:"ColumnSet",columns:[{type:"Column",justifyContent:"center",alignItems:"center",xsWidth:"12",lgWidth:"4",body:[mockCard]},{type:"Column",justifyContent:"center",alignItems:"center",xsWidth:"12",lgWidth:"4",body:[mockCard]},{type:"Column",justifyContent:"center",alignItems:"center",xsWidth:"12",lgWidth:"4",body:[mockCard]}]}]}}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    adaptiveJson: adaptiveJson\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Form.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Form.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Form$parameters=Form.parameters)||void 0===_Form$parameters?void 0:_Form$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    adaptiveJson: form\n  }\n}"},null===(_Form$parameters2=Form.parameters)||void 0===_Form$parameters2||null===(_Form$parameters2$doc=_Form$parameters2.docs)||void 0===_Form$parameters2$doc?void 0:_Form$parameters2$doc.source)})}),Accordian.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Accordian.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Accordian$parameters=Accordian.parameters)||void 0===_Accordian$parameters?void 0:_Accordian$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    adaptiveJson: accordian\n  }\n}"},null===(_Accordian$parameters2=Accordian.parameters)||void 0===_Accordian$parameters2||null===(_Accordian$parameters3=_Accordian$parameters2.docs)||void 0===_Accordian$parameters3?void 0:_Accordian$parameters3.source)})}),Cards.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Cards.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Cards$parameters=Cards.parameters)||void 0===_Cards$parameters?void 0:_Cards$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    adaptiveJson: cards\n  }\n}"},null===(_Cards$parameters2=Cards.parameters)||void 0===_Cards$parameters2||null===(_Cards$parameters2$do=_Cards$parameters2.docs)||void 0===_Cards$parameters2$do?void 0:_Cards$parameters2$do.source)})});var __namedExportsOrder=["Default","Form","Accordian","Cards"]}}]);