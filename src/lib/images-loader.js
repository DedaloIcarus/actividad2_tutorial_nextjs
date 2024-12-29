const isProd = process.env.NODE_ENV === 'production';

export default function getImagesBasePath() {
    return isProd ? '/actividad2_tutorial_nextjs' : '';
}
