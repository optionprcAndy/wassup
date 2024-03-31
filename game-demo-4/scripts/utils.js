export let option = {
    isGameOver: false
}

export function getCenterX(scene){
    return scene.sys.canvas.width / 2;
}

export function getCenterY(scene){
    return scene.sys.canvas.height / 2;
}

export function getWidth(scene){
    return scene.sys.canvas.width;
}

export function getHeight(scene){
    return scene.sys.canvas.height;
}

export function explosionSound(scene){
    scene.sound.play("explosion");
}
export function shellSound(scene){
    scene.sound.play("shell_shot");
}

