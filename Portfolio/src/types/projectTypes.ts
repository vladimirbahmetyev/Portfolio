export type ProjectUrlType = "Metamap" | "Jobswidget" | "GameGreed"|"Mugler" | "MyGlo" | "CorpPass" | "Shopic"

export type ProjectDataType = {
  name:string,
  description:string,
  roleDescription:string,
  listOfResp:string[],
  siteUrl?:string
}
