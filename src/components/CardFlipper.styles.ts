import { SxProps, Theme } from "@mui/material";

export const cardContainer: SxProps<Theme> = {
    perspective: "1000px",
    width: 700,
    height: 400,
    cursor: "pointer"
};

export const slideWrapper = (
    slideDirection: 'next' | 'prev' | null = null
): SxProps<Theme> => ({
    width: "100%",
    height: "100%",
    transform: slideDirection ? slideDirection === 'next' ? "translateX(-60px)" : "translateX(60px)" : "translateX(0)",
    opacity: slideDirection ? 0 : 1,
    transition: slideDirection ? "transform 0.25s ease, opacity 0.25s ease" : "transform 0.6s ease",
    position: "relative"
});

export const flipWrapper = (flipped: boolean): SxProps<Theme> => ({
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
    transition: "transform 0.8s ease"
});

export const cardFace: SxProps<Theme> = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

export const cardBack: SxProps<Theme> = {
    ...cardFace,
    transform: "rotateY(180deg)"
};
