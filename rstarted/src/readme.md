Component Nesting

Component Resuability

Component Configuration

Creating a reusable, configurable component
-Identify the JSX that appers to be duplicated
-What is the purpose of that block of JSX? think of a descriptive name for what it dows
-Create a new file to house this new component - it should have the same name as the component
-Create a new component in the new file, oaste the JSX into it
-Make the new component configurable by using React's 'props' system


| `imr` | Import React |
| - | - |
| `imrc` | Import React / Component |
| `imrs` | Import React / useState |
| `imrse` | Import React / useState useEffect |
| `impt` | Import PropTypes |
| `impc` | Import React / PureComponent |
| `cc` | Class Component |
| `ccc` | Class Component With Constructor |
| `cpc` | Class Pure Component |
| `sfc` | Stateless Function Component |
| `cdm` | componentDidMount |
| `uef` | useEffect Hook |
| `cwm` | componentWillMount |
| `cwrp` | componentWillReceiveProps |
| `gds` | getDerivedStateFromProps |
| `scu` | shouldComponentUpdate |
| `cwu` | componentWillUpdate |
| `cdu` | componentDidUpdate |
| `cwu` | componentWillUpdate |
| `cdc` | componentDidCatch |
| `gsbu` | getSnapshotBeforeUpdate |
| `ss` | setState |
| `ssf` | Functional setState |
| `usf` | Declare a new state variable using State Hook |
| `ren` | render |
| `rprop` | Render Prop |
| `hoc` | Higher Order Component |

React function system and Class system
now with hooks function system is equal to class

React Class System

It can show content to the user
It can use the lifecycle to the run code at specific points in time
It can use state system to update content on the screen

---

React Function System

It can show JSX content to the users
Can use Hooks to run code at specific points in time
It can use Hooks to access state system and update content to the screen
 

Rule of State

Only usable with class components
'State' is a JS object that contain data relevant to a component
Updating 'state' on a component causes the component to almost instantly render
State must be initialized when a component is created
State must be initialized when a component is created
State can only be updated using the function is 'setState'

Life cycle methods

Constructor - Good place to do one time setup
Render - Avoid doing anything besides returning JSX
Content visible on the screen
ComponentDidMount - Good place to do data loading
Sit and wait for updates
ComponentDidUpdate - Good place to do more data loading when state/props change
Sit and wait until this component is not longer shown
ComponentWillUmount - Good place to do cleanup

Extras

shoudCompnentUpdate
getDerivedStateFromProps
getSnapshotBeforeUpdate

We can take one component as pass it by a child as a prop

Controlled vs Uncontrolled element
the value is stored in the components in the react
