import { Button, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { makeStyles } from "@mui/styles";

const buttonSx = {
  "&:hover": {
    color: "#787486",
  },
  borderColor: "#787486",
  color: "#787486",
  textTransform: "none",
  borderRadius: "6px",
  border: "1px solid #787486",
  height: 40,
  fontSize: 16,
};

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "#F4D7DA!important",
    color: "#D25B68!important",
  },
}));

const FilterIcon = () => {
  return (
    <img
      height="16"
      width="16"
      alt="filter icon"
      src="https://res.cloudinary.com/dfegprdja/image/upload/v1687075846/kanban-clone/filter_rq1v96.png"
    />
  );
};

const ArrowDownIcon = () => {
  return (
    <img
      height="16"
      width="16"
      alt="filter icon"
      src="https://res.cloudinary.com/dfegprdja/image/upload/v1687064888/kanban-clone/arrow-down_piozds.png"
    />
  );
};

const CalendarIcon = () => {
  return (
    <img
      height="16"
      width="16"
      alt="filter icon"
      src="https://res.cloudinary.com/dfegprdja/image/upload/v1687075854/kanban-clone/calendar_sqql8i.png"
    />
  );
};

const PeopleIcon = () => {
  return (
    <img
      height="16"
      width="16"
      alt="filter icon"
      src="https://res.cloudinary.com/dfegprdja/image/upload/v1687077002/kanban-clone/Group_615_uij8ph.png"
    />
  );
};

export default function SubHeader() {
  const classes = useStyles();
  return (
    <section className="p-8 pl-3">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between items-center">
            <div className="mx-2">
              <h2 className="font-semibold text-2xl lg:text-4xl">Mobile App</h2>
            </div>
            <div className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
                  fill="#5030E5"
                  fill-opacity="0.2"
                />
                <path
                  d="M16.1375 9.80001L9.64998 16.2875C9.39998 16.5375 9.16249 17.025 9.11249 17.375L8.76249 19.85C8.63749 20.75 9.26249 21.375 10.1625 21.25L12.6375 20.9C12.9875 20.85 13.475 20.6125 13.725 20.3625L20.2125 13.875C21.325 12.7625 21.8625 11.4625 20.2125 9.81251C18.5625 8.15001 17.2625 8.67501 16.1375 9.80001Z"
                  stroke="#5030E5"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.2125 10.725C15.7625 12.6875 17.3 14.2375 19.275 14.7875"
                  stroke="#5030E5"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="mx-2">
              <img
                className="cursor-pointer"
                height="30"
                width="30"
                alt="link icon"
                src="https://res.cloudinary.com/dfegprdja/image/upload/v1687069322/kanban-clone/Group_626_evpbyc.png"
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="cursor-pointer lg:block hidden">
              <div className="flex justify-between items-center gap-2">
                <div>
                  <img
                    height="18"
                    width="18"
                    alt="plus icon"
                    src="https://res.cloudinary.com/dfegprdja/image/upload/v1687069381/kanban-clone/add-square_gnf0ch.png"
                  />
                </div>
                <div>
                  <span className="text-[#5030E5]" style={{ fontSize: 16 }}>
                    Invite
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:block hidden">
              <AvatarGroup classes={{ avatar: classes.avatar }} total={6}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 38, height: 38 }}
                  src="https://res.cloudinary.com/dfegprdja/image/upload/v1687070958/kanban-clone/Ellipse_12_ioshbq.png"
                />
                <Avatar
                  alt="Travis Howard"
                  sx={{ width: 38, height: 38 }}
                  src="https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_13_dguqst.png"
                />
                <Avatar
                  alt="Cindy Baker"
                  sx={{ width: 38, height: 38 }}
                  src="https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_15_vskmol.png"
                />
                <Avatar
                  alt="Agnes Walker"
                  src="https://res.cloudinary.com/dfegprdja/image/upload/v1687071064/kanban-clone/Ellipse_14_yvjn5y.png"
                />
              </AvatarGroup>
            </div>
          </div>
        </div>
        <div
          className="flex justify-between items-center w-full mx-2 "
          style={{ paddingLeft: "0.9px" }}
        >
          <div className="flex justify-between gap-3">
            <div className="lg:block hidden">
              <Button
                size="small"
                sx={buttonSx}
                variant="outlined"
                startIcon={<FilterIcon />}
                endIcon={<ArrowDownIcon />}
              >
                Filter
              </Button>
            </div>
            <div className="lg:block hidden">
              <Button
                size="small"
                sx={buttonSx}
                variant="outlined"
                startIcon={<CalendarIcon />}
                endIcon={<ArrowDownIcon />}
              >
                Today
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-5 mr-2">
            <div className="lg:block hidden">
              <Button
                size="small"
                sx={buttonSx}
                variant="outlined"
                startIcon={<PeopleIcon />}
              >
                Share
              </Button>
            </div>
            <Divider flexItem orientation="vertical" />
            <div className="lg:block hidden">
              <img
                className="cursor-pointer"
                height="40"
                width="40"
                alt="snackbar"
                src="https://res.cloudinary.com/dfegprdja/image/upload/v1687076989/kanban-clone/Group_612_isqjiw.png"
              />
            </div>
            <div className="lg:block hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M15.1949 7.99994C16.5756 7.99994 17.6949 6.88065 17.6949 5.49994C17.6949 4.11923 16.5756 2.99994 15.1949 2.99994C13.8142 2.99994 12.6949 4.11923 12.6949 5.49994C12.6949 6.88065 13.8142 7.99994 15.1949 7.99994Z"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.50001 7.99994C6.88072 7.99994 8 6.88065 8 5.49994C8 4.11923 6.88072 2.99994 5.50001 2.99994C4.11929 2.99994 3 4.11923 3 5.49994C3 6.88065 4.11929 7.99994 5.50001 7.99994Z"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.1949 17.9999C16.5756 17.9999 17.6949 16.8807 17.6949 15.4999C17.6949 14.1192 16.5756 12.9999 15.1949 12.9999C13.8142 12.9999 12.6949 14.1192 12.6949 15.4999C12.6949 16.8807 13.8142 17.9999 15.1949 17.9999Z"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.50001 17.9999C6.88072 17.9999 8 16.8807 8 15.4999C8 14.1192 6.88072 12.9999 5.50001 12.9999C4.11929 12.9999 3 14.1192 3 15.4999C3 16.8807 4.11929 17.9999 5.50001 17.9999Z"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
