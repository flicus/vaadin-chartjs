$wnd.ChartJsWidgetset.runAsyncCallback7("defineClass(217, 720, $intern_34);\n_.getX = function getX(){\n  var relativeElem;\n  relativeElem = this.getRelativeElement();\n  if (isNotNull(relativeElem)) {\n    return this.getRelativeX(relativeElem);\n  }\n  return this.getClientX();\n}\n;\ndefineClass(10, 1, $intern_84);\n_.setPixelSize = function setPixelSize(width_0, height){\n  if (width_0 >= 0) {\n    this.setWidth_0(width_0 + 'px');\n  }\n  if (height >= 0) {\n    this.setHeight_0(height + 'px');\n  }\n}\n;\ndefineClass(2136, 77, $intern_299);\n_.$init_434 = function $init_434(){\n}\n;\n_.addClickHandler = function addClickHandler_1(handler){\n  return this.addDomHandler(handler, cggedc.getType_10());\n}\n;\n_.addDoubleClickHandler = function addDoubleClickHandler_1(handler){\n  return this.addDomHandler(handler, cggedc.getType_12());\n}\n;\n_.addKeyUpHandler = function addKeyUpHandler_0(handler){\n  return this.addDomHandler(handler, cggedc.getType_16());\n}\n;\n_.addMouseUpHandler = function addMouseUpHandler_0(handler){\n  return this.addDomHandler(handler, cggedc.getType_22());\n}\n;\n_.setFocus = function setFocus_2(focused){\n  if (focused) {\n    cggucu.impl_12.focus_1(this.getElement());\n  }\n   else {\n    cggucu.impl_12.blur_2(this.getElement());\n  }\n}\n;\n_.setTabIndex = function setTabIndex_2(index_0){\n  cggucu.impl_12.setTabIndex_0(this.getElement(), index_0);\n}\n;\ndefineClass(1629, 1, $intern_177);\n_.select_6 = function select_8(p0, p1){\n  this.val$handler2.invoke(this, cvcm.getType_38(cggl.Lcom_vaadin_shared_ui_colorpicker_ColorPickerGradientServerRpc_2_classLit).getMethod('select'), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_7, 1, 3, [jl.valueOf_73(p0), jl.valueOf_73(p1)]));\n}\n;\ndefineClass(1754, 1, $intern_127);\n_.load_9 = function load_13(){\n  this.val$store2.setSuperClass(cggl.Lcom_vaadin_shared_ui_colorpicker_ColorPickerGradientState_2_classLit, cggl.Lcom_vaadin_shared_AbstractComponentState_2_classLit);\n  this.val$store2.setClass('com.vaadin.ui.components.colorpicker.ColorPickerGradient', cggl.Lcom_vaadin_client_ui_colorpicker_ColorPickerGradientConnector_2_classLit);\n  this.val$store2.setConstructor(cggl.Lcom_vaadin_client_ui_colorpicker_ColorPickerGradientConnector_2_classLit, new cvcm.ConnectorBundleLoaderImpl$7$1$1(this));\n  this.val$store2.setConstructor(cggl.Lcom_vaadin_shared_ui_colorpicker_ColorPickerGradientState_2_classLit, new cvcm.ConnectorBundleLoaderImpl$7$1$2(this));\n  this.val$store2.setReturnType(cggl.Lcom_vaadin_client_ui_colorpicker_ColorPickerGradientConnector_2_classLit, 'getState', new cvcm.Type(cggl.Lcom_vaadin_shared_ui_colorpicker_ColorPickerGradientState_2_classLit));\n  this.loadJsBundle_5(this.val$store2);\n  this.val$store2.setPropertyType(cggl.Lcom_vaadin_shared_ui_colorpicker_ColorPickerGradientState_2_classLit, 'bgColor', new cvcm.Type(cggl.Ljava_lang_String_2_classLit));\n  this.val$store2.setPropertyType(cggl.Lcom_vaadin_shared_ui_colorpicker_ColorPickerGradientState_2_classLit, 'cursorX', new cvcm.Type(cggl.Ljava_lang_Integer_2_classLit));\n  this.val$store2.setPropertyType(cggl.Lcom_vaadin_shared_ui_colorpicker_ColorPickerGradientState_2_classLit, 'cursorY', new cvcm.Type(cggl.Ljava_lang_Integer_2_classLit));\n  this.val$store2.addOnStateChangeMethod(cggl.Lcom_vaadin_client_ui_colorpicker_ColorPickerGradientConnector_2_classLit, new cvcm.OnStateChangeMethod(cggl.Lcom_vaadin_client_ui_AbstractComponentConnector_2_classLit, 'handleContextClickListenerChange', initValues(getClassLiteralForArray(cggl.Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['registeredEventListeners'])));\n}\n;\n_.loadJsBundle_5 = function loadJsBundle_5(store){\n  this.loadNativeJs_5(store);\n}\n;\n_.loadNativeJs_5 = function loadNativeJs_5(store){\n  var data_0 = {setter:function(bean, value_0){\n    bean.bgColor = value_0;\n  }\n  , getter:function(bean){\n    return bean.bgColor;\n  }\n  };\n  store.setPropertyData(cggl.Lcom_vaadin_shared_ui_colorpicker_ColorPickerGradientState_2_classLit, 'bgColor', data_0);\n  var data_0 = {setter:function(bean, value_0){\n    bean.cursorX = value_0.intValue();\n  }\n  , getter:function(bean){\n    return jl.valueOf_73(bean.cursorX);\n  }\n  };\n  store.setPropertyData(cggl.Lcom_vaadin_shared_ui_colorpicker_ColorPickerGradientState_2_classLit, 'cursorX', data_0);\n  var data_0 = {setter:function(bean, value_0){\n    bean.cursorY = value_0.intValue();\n  }\n  , getter:function(bean){\n    return jl.valueOf_73(bean.cursorY);\n  }\n  };\n  store.setPropertyData(cggl.Lcom_vaadin_shared_ui_colorpicker_ColorPickerGradientState_2_classLit, 'cursorY', data_0);\n}\n;\n_.onSuccess_1 = function onSuccess_11(){\n  this.load_9();\n  cvcm.get_30().setLoaded_0(this.this$11.getName());\n}\n;\ndefineClass(1756, 1, $intern_172, cvcm.ConnectorBundleLoaderImpl$7$1$1);\n_.$init_1212 = function $init_1212(){\n}\n;\n_.invoke_0 = function invoke_270(target, params){\n  return new cvcuc3.ColorPickerGradientConnector;\n}\n;\ndefineClass(1757, 1, $intern_172, cvcm.ConnectorBundleLoaderImpl$7$1$2);\n_.$init_1213 = function $init_1213(){\n}\n;\n_.invoke_0 = function invoke_271(target, params){\n  return new cvsuc3.ColorPickerGradientState;\n}\n;\ndefineClass(1755, 12, {103:1, 7:1, 15:1, 23:1, 27:1, 12:1, 18:1, 26:1, 3:1, 1:1}, cvcuc3.ColorPickerGradientConnector);\n_.$init_1572 = function $init_1572(){\n  this.rpc = dynamicCast(cvcc.create_15(cggl.Lcom_vaadin_shared_ui_colorpicker_ColorPickerGradientServerRpc_2_classLit, this), 759);\n}\n;\n_.createWidget = function createWidget_9(){\n  return dynamicCast(new cvcuc3.VColorPickerGradient, 6);\n}\n;\n_.getState = function getState_44(){\n  return this.getState_22();\n}\n;\n_.getState_22 = function getState_45(){\n  return dynamicCast(getClassPrototype(12).getState.call(this), 651);\n}\n;\n_.getWidget_0 = function getWidget_36(){\n  return this.getWidget_17();\n}\n;\n_.getWidget_17 = function getWidget_37(){\n  return dynamicCast(getClassPrototype(12).getWidget_0.call(this), 683);\n}\n;\n_.init_3 = function init_31(){\n  getClassPrototype(18).init_3.call(this);\n  this.getWidget_17().addMouseUpHandler(this);\n}\n;\n_.onMouseUp = function onMouseUp_7(event_0){\n  this.rpc.select_6(this.getWidget_17().getCursorX(), this.getWidget_17().getCursorY());\n}\n;\n_.onStateChanged = function onStateChanged_18(stateChangeEvent){\n  getClassPrototype(12).onStateChanged.call(this, stateChangeEvent);\n  if (stateChangeEvent.hasPropertyChanged('cursorX') || stateChangeEvent.hasPropertyChanged('cursorY')) {\n    this.getWidget_17().setCursor(this.getState_22().cursorX, this.getState_22().cursorY);\n  }\n  if (stateChangeEvent.hasPropertyChanged('bgColor')) {\n    this.getWidget_17().setBGColor(this.getState_22().bgColor);\n  }\n}\n;\ndefineClass(683, 2136, {41:1, 38:1, 94:1, 361:1, 103:1, 7:1, 14:1, 59:1, 22:1, 21:1, 10:1, 6:1, 100:1, 683:1, 16:1, 1:1}, cvcuc3.VColorPickerGradient);\n_.$init_1574 = function $init_1574(){\n  this.mouseIsDown = false;\n  this.width_0 = 220;\n  this.height_0 = 220;\n}\n;\n_.getCursorX = function getCursorX(){\n  return this.cursorX;\n}\n;\n_.getCursorY = function getCursorY(){\n  return this.cursorY;\n}\n;\n_.getSubPartElement = function getSubPartElement_11(subPart){\n  if (jl.equals_Ljava_lang_Object__Z__devirtual$_0(subPart, 'clicklayer')) {\n    return this.clicklayer.getElement();\n  }\n  return null;\n}\n;\n_.getSubPartName = function getSubPartName_11(subElement){\n  if (cggdc.$isOrHasChild(this.clicklayer.getElement(), subElement)) {\n    return 'clicklayer';\n  }\n  return null;\n}\n;\n_.onMouseDown = function onMouseDown_11(event_0){\n  event_0.preventDefault_0();\n  this.mouseIsDown = true;\n  this.setCursor(event_0.getX(), event_0.getY());\n}\n;\n_.onMouseMove = function onMouseMove_5(event_0){\n  event_0.preventDefault_0();\n  if (this.mouseIsDown) {\n    this.setCursor(event_0.getX(), event_0.getY());\n  }\n}\n;\n_.onMouseUp = function onMouseUp_8(event_0){\n  event_0.preventDefault_0();\n  this.mouseIsDown = false;\n  this.setCursor(event_0.getX(), event_0.getY());\n  this.cursorX = event_0.getX();\n  this.cursorY = event_0.getY();\n}\n;\n_.setBGColor = function setBGColor(bgColor){\n  if (jsEquals(bgColor, null)) {\n    cggdc.$clearBackgroundColor(cggdc.$getStyle(this.background.getElement()));\n  }\n   else {\n    cggdc.$setBackgroundColor(cggdc.$getStyle(this.background.getElement()), bgColor);\n  }\n}\n;\n_.setCursor = function setCursor(x_0, y_0){\n  this.cursorX = x_0;\n  this.cursorY = y_0;\n  if (x_0 >= 0) {\n    cggdc.$setWidth_1(cggdc.$getStyle(this.lowercross.getElement()), x_0, (cggdc.$clinit_Style$Unit() , cggdc.PX));\n  }\n  if (y_0 >= 0) {\n    cggdc.$setTop(cggdc.$getStyle(this.lowercross.getElement()), y_0, (cggdc.$clinit_Style$Unit() , cggdc.PX));\n  }\n  if (y_0 >= 0) {\n    cggdc.$setHeight_1(cggdc.$getStyle(this.lowercross.getElement()), this.height_0 - y_0, (cggdc.$clinit_Style$Unit() , cggdc.PX));\n  }\n  if (x_0 >= 0) {\n    cggdc.$setWidth_1(cggdc.$getStyle(this.highercross.getElement()), this.width_0 - x_0, (cggdc.$clinit_Style$Unit() , cggdc.PX));\n  }\n  if (x_0 >= 0) {\n    cggdc.$setLeft(cggdc.$getStyle(this.highercross.getElement()), x_0, (cggdc.$clinit_Style$Unit() , cggdc.PX));\n  }\n  if (y_0 >= 0) {\n    cggdc.$setHeight_1(cggdc.$getStyle(this.highercross.getElement()), y_0, (cggdc.$clinit_Style$Unit() , cggdc.PX));\n  }\n}\n;\n_.cursorX = 0;\n_.cursorY = 0;\n_.height_0 = 0;\n_.mouseIsDown = false;\n_.width_0 = 0;\ndefineClass(651, 31, {31:1, 35:1, 651:1, 3:1, 1:1}, cvsuc3.ColorPickerGradientState);\n_.$init_1959 = function $init_1959(){\n}\n;\n_.cursorX = 0;\n_.cursorY = 0;\n$entry(onLoad)(7);\n\n//# sourceURL=ChartJsWidgetset-7.js\n")