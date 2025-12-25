import {Box, Card, CardContent, Typography} from "@mui/material";
import * as styles from "./CardFlipper.styles";

/**
 * Свойства для компонента CardFlipper.
 *
 * @param term - термин для отображения на лицевой стороне карточки.
 * @param definition - определение для обратной стороны карточки.
 * @param flipped - флаг, указывающий, перевёрнута ли карточка.
 * @param onFlip - функция для переключения состояния переворота.
 */
interface CardFlipperProps {
    first: string;
    second: string;
    flipped: boolean;
    onFlip: () => void;
}

/**
 * Компонент карточки с анимацией переворота (флиппер).
 *
 * Показывает термин на лицевой стороне и определение на обратной.
 * Переворачивается при клике мыши или при нажатии пробела.
 */
export const CardFlipper: React.FC<CardFlipperProps> = ({first, second, flipped, onFlip,}) => {

    return (
        <Box sx={styles.cardContainer} onClick={onFlip}>
            <Box sx={styles.cardWrapper(flipped)}>
                <Card sx={styles.cardFace}>
                    <CardContent>
                        <Typography variant="h6" align="center">
                            {first}
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={styles.cardBack}>
                    <CardContent>
                        <Typography variant="body1" align="center">
                            {second}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};