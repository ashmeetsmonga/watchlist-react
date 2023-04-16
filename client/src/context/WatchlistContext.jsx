import React, { createContext, useState } from "react";

export const Context = createContext();

const WatchlistContext = ({ children }) => {
	const [selectedWatchlist, setSelectedWatchlist] = useState(null);

	return (
		<Context.Provider value={{ selectedWatchlist, setSelectedWatchlist }}>
			{children}
		</Context.Provider>
	);
};

export default WatchlistContext;
