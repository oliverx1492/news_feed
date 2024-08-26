// Importieren von React und den notwendigen Hooks aus der React-Bibliothek
import React, { createContext, useState } from "react";

// Erstellen eines neuen Kontextes, der verwendet wird, um Daten zwischen Komponenten zu teilen.
// `InputContext` wird als Schlüssel verwendet, um auf den Kontext zuzugreifen.
export const InputContext = createContext();

// Definieren und Exportieren einer Provider-Komponente, die den Kontext zur Verfügung stellt.
// `InputProvider` umschließt die Kinderkomponenten und stellt den Kontext zur Verfügung.
export const InputProvider = ({ children }) => {
    // Initialisieren eines Zustandswertes `input` mit dem Standardwert "TEST".
    // `setInput` ist die Funktion, um diesen Zustand zu aktualisieren.
    const [input, setInput] = useState("TEST");

    // Die Provider-Komponente gibt das `InputContext.Provider`-Element zurück.
    // Alle Kinderkomponenten, die von `InputProvider` umschlossen werden, haben Zugriff auf den Kontextwert.
    return (
        <InputContext.Provider value={{ input, setInput }}>
            {/* `children` repräsentiert alle Komponenten, die von `InputProvider` umschlossen werden. */}
            {children}
        </InputContext.Provider>
    );
};
