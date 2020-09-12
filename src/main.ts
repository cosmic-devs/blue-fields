import { RouterModule } from './modules/router'
import { StoreModule } from './modules/store'
import { HomeModule } from './modules/home'
import { CoreModule } from './modules/core'

function bootstrap() {
  const routerModule = new RouterModule()
  routerModule.install()

  const storeModule = new StoreModule()
  storeModule.install()

  const homeModule = new HomeModule(routerModule.router!, storeModule.store!)
  homeModule.install()

  const coreModule = new CoreModule(routerModule.router!, storeModule.store!)
  coreModule.install()
}

bootstrap()
