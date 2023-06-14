import React, {PropsWithChildren} from "react";

export type ReactFC<T> = React.FC<PropsWithChildren & T>;
