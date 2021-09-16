import { render } from "@testing-library/react"
import Nav from "../Nav"


test("Check all the Nav buttons are on the page",()=>{
  let {getByTestId}=render(<Nav/>)

  let homeLi = getByTestId("Home")
  let AboutLi = getByTestId("About")
  let ProjectLi = getByTestId("Projects")
  let ContactLi = getByTestId("Contacts")
  let DarkThemeLi = getByTestId("DarkTheme")
  let LightThemeLi = getByTestId("LightTheme")

  expect(homeLi).toBeInTheDocument()
  expect(AboutLi).toBeInTheDocument()
  expect(ProjectLi).toBeInTheDocument()
  expect(ContactLi).toBeInTheDocument()
  expect(DarkThemeLi).toBeInTheDocument()
  expect(LightThemeLi).toBeInTheDocument()
})