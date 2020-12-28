import React from "react"
import {createDrawerNavigator}from "react-navigation-drawer"
import {AppTabNavigator}from "./AppTabNavigator"
import Costomsidebarmenue from "./costomsidebarmenue"
export const Appdrawnavigator=createDrawerNavigator({

Home:{screen:AppTabNavigator},},
{contentComponent:Costomsidebarmenue},{

initialRoutName:"Home"


}


)



























