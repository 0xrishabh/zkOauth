import { React} from "react"
import { useForm, SubmitHandler } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { object, string, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from "@material-ui/core/TextField";

let userSchema = object({
    name: string().required(),
    age: number().required().positive().integer(),
    address: string().required()
  });
  
  type Inputs = {
    name: string,
    age: number,
    address: string,
  };
  const useStyles = makeStyles({
    input: {
      color: "white"
    }
  });

export default function GreetingForm() {
    const classes = useStyles();

    const { register, 
        handleSubmit, 
        formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver<yup.AnyObjectSchema>(userSchema)
    });
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <div>
        <TextField {...register("name", { required: true })}
            inputProps={{ className: classes.input }}
            InputLabelProps={{ className: classes.input }}
            required
            id="standard-required"
            label="Name"
            placeholder="required"
            variant="standard"
        />
        </div>
        <div>
        <TextField {...register("age", { required: true })}
            inputProps={{ className: classes.input }}
            InputLabelProps={{ className: classes.input,
            shrink: true }}
            id="standard-required"
            label="Age"
            type="number"
        />

        </div>
        <div>
        <TextField {...register("address", { required: true })}
            inputProps={{ className: classes.input }}
            InputLabelProps={{ className: classes.input }}
            required
            id="standard-required"
            label="Address"
            placeholder="required"
            variant="standard"
        />
        </div>
        <input type="submit" 
        value="Submit"
        />
    </form>
    );
  }