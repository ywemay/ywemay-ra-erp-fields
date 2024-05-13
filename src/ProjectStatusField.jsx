import { 
  FunctionField, 
} from "react-admin";
import { 
  Draw as Draft,
  Verified as Confirmed,
  FlagCircle as Complete,
  Block as Canceled,
  Troubleshoot as Processing,
} from "@mui/icons-material";

function RenderStatusField(r) {
  return <>
    {r.archived && <Archive color="warning" />}
    {(r.draft || !r.confirmed) && <Draft color="warning" />}
    {r.confirmed && <Confirmed color="primary" />}
    {r.processing && <Processing color="primary" />}
    {r.completed && <Complete color="success" />}
    {r.canceled && <Canceled color="error" />}
  </>
}

export function ProjectStatusField(props) {
  
  return <FunctionField
    render={RenderStatusField}
    {...props}
   />
}
