export default class Game extends Phaser.State {

	create() {
		this.animationRunning = false;

		this.logo = this.add.image(this.game.width * 0.5, this.game.height * 0.5, 'logo');
		this.logo.anchor.setTo(0.5);
		this.logo.inputEnabled = true;
		this.logo.events.onInputDown.add(() => {
			if (!this.animationRunning) {
				this.doAnimation(parent.animationType);
			}
		});
		this.reset = this.add.image(40, 200, 'reset');
		this.reset.inputEnabled = true;
		this.reset.events.onInputDown.add(() => {
			console.log('reset working');
			this.logo = this.add.image(this.game.width * 0.5, this.game.height * 0.5, 'logo');
			this.logo.anchor.setTo(0.5);
			this.logo.inputEnabled = true;
			this.logo.events.onInputDown.add(() => {
				if (!this.animationRunning) {
					this.doAnimation(parent.animationType);
				}
			});
		});
	}

	doAnimation(animVal) {
		this.animationRunning = true;
		switch (animVal) {
			case 0:
				this.logo.alpha = 0;
				this.game.animations.fade.fadeIn(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 1:
				this.logo.alpha = 0;
				this.game.animations.fade.fadeInDown(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 2:
				this.game.animations.fade.fadeOut(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 3:
				this.game.animations.fade.fadeFlash(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 4:
				this.game.animations.inFromTop.bounce(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 5:
				this.logo.alpha = 0;
				this.game.animations.inFromTop.fade(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 6:
				this.game.animations.rotateFromCenter.rotateIn(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 7:
				this.logo.alpha = 0;
				this.game.animations.rotateFromCenter.rotateInFade(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 8:
				this.game.animations.rotateFromCenter.rotateOutFade1(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 9:
				this.game.animations.rotateFromCenter.rotateOutFade2(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 10:
				this.game.animations.slide.slideInFromBottom(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 11:
				this.game.animations.slide.slideInFromTop(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 12:
				this.game.animations.slide.slideInFromRight(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 13:
				this.game.animations.slide.slideInFromLeft(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 14:
				this.game.animations.slide.slideOutToBottom(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 15:
				this.game.animations.slide.slideOutToTop(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 16:
				this.game.animations.slide.slideOutToRight(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 17:
				this.game.animations.slide.slideOutToLeft(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 18:
				this.game.animations.size.shrinkIt(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 19:
				this.game.animations.size.pop(this.game, this.logo, false, () => {
					this.animationRunning = false;
					console.log('done, bruh')
				});
				break;
			case 20:
				this.game.animations.size.popOut(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 21:
				this.game.animations.size.scaleOutY(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 22:
				this.logo.scale.y = 0;
				this.game.animations.size.scaleInY(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 23:
				this.game.animations.size.scaleOutX(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 24:
				this.logo.scale.x = 0;
				this.game.animations.size.scaleInX(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 25:
				this.game.animations.shakes.shakeX(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 26:
				this.game.animations.shakes.shakeY(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 27:
				this.game.animations.switch.shrinkX(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
			case 28:
				this.game.animations.switch.shrinkY(this.game, this.logo, false, () => {
					this.animationRunning = false;
				});
				break;
		}
	}
}