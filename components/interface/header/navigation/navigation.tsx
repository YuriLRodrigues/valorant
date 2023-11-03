import { NavigationMock } from "./navigation-mock"
import { Navlink } from "./navlink"


export const Navigation = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 md:items-center justify-center">
      {NavigationMock.map((nav)=> (
        <Navlink item={nav} key={nav.href} />
      ))}
    </div>
  )
}
