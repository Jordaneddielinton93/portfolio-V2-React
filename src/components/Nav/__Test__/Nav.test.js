import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PageWrapper } from "../../App/App"
import Nav from "../Nav"
import { NavStyled } from "../Nav.style"


test("Check all the Nav buttons are on the page",()=>{
  const state={
    colourNaked:"#FBF8F4",
    colourBrown:"#472425"
  }

  let {getByTestId}=render(
    <PageWrapper.Provider value={{state}}> 
      <Nav/>
    </PageWrapper.Provider>
  )

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



test("Check Light Theme button change's the color to light",()=>{
  const state={
    colourNaked:"#FBF8F4",
    colourBrown:"#472425"
  }
  const dispatch = jest.fn((item)=>item)
  
  // ^^ passing the global state down
  let {getByTestId} = render(
    <PageWrapper.Provider value={{state,dispatch}}> 
      <Nav/>
    </PageWrapper.Provider>
  )

  let getLightThemeBtn = getByTestId("LightThemeBtn")
  expect(getLightThemeBtn).toBeInTheDocument()

  userEvent.click(getLightThemeBtn)
  
  expect(dispatch).toHaveReturnedWith({"payload": "LightTheme", "type": "CHANGE_COLOUR"})
    // dispatch returns an object with a payload of lightTheme
})

test("Check dark Theme button change's the color to dark",()=>{
  const state={
    colourNaked:"#FBF8F4",
    colourBrown:"#472425"
  }
  const dispatch = jest.fn((item)=>item)
  
  // ^^ passing the global state down
  let {getByTestId} = render(
    <PageWrapper.Provider value={{state,dispatch}}> 
      <Nav/>
    </PageWrapper.Provider>
  )

  let getLightThemeBtn = getByTestId("DarkThemeBtn")
  expect(getLightThemeBtn).toBeInTheDocument()

  userEvent.click(getLightThemeBtn)
  
  expect(dispatch).toHaveReturnedWith({"payload": "DarkTheme", "type": "CHANGE_COLOUR"})
    // dispatch returns an object with a payload of lightTheme
}) 