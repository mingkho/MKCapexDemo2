{
	"_Name": "MyCapexApplication",
	"Version": "/MyCapexApplication/Globals/AppDefinition_Version.global",
	"MainPage": "/MyCapexApplication/Pages/Capex/Capex_List.page",
	"OnLaunch": [
		"/MyCapexApplication/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/MyCapexApplication/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/MyCapexApplication/Actions/Service/InitializeOnline.action",
	"Styles": "/MyCapexApplication/Styles/Styles.less",
	"Localization": "/MyCapexApplication/i18n/i18n.properties",
	"_SchemaVersion": "23.8"
}