<template>
     <nav>
            <img  className='nav-logo' src='@/assets/logo.png' alt='logo' />
            <div className='nav-user-info'>
                <p>
                    Tarek Hassan
                </p>
                <img src='@/assets/profile.jpg' alt='user avatar'/>
            </div>
      </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 20px 85px;
  z-index: 10;
  box-shadow: var(--shadow);
}

nav .nav-logo {
  width: 150px;
  height: 30px;
}

.nav-user-info {
    display: flex;
}

.nav-user-info img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 20px;
}
</style>
