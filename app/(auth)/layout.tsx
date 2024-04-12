import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex-center w-full min-h-screen bg-primary-50 bg-cover bg-dotted-pattern bg-fixed bg-center  ">
			{children}
		</div>
	);
};

export default layout;
