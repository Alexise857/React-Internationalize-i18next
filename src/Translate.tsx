import { useTranslation, Trans } from 'react-i18next';
import React from "react";

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' }
} as any;

function Translate() {
    const { t, i18n } = useTranslation();

    return(
        <div>
            {Object.keys(lngs).map((lng: any) => (
                <button key={lng}
                        style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }}
                        id={lng}
                        type="submit"
                        onClick={() => i18n.changeLanguage(lng)}>
                    {lngs[lng].nativeName}
                </button>
            ))}
        </div>
    )
}

export default Translate
