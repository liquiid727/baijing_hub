
export default function Page() {
  return (
    <>
      <h1>Welcome to Baijing Hub!</h1>
      <News/>
      <GachaSimulator />
      <ReservedSpace/>
    </>
  );
}const News =()=>{
  return(<>
  <div>this is news</div>
  <div>当前up的角色池 烙痕池信息</div>
  </>
  )
}
const GachaSimulator =() =>{
  return(<>
      <div>this is gacha simulator</div>
      </>
      )
}

const ReservedSpace =() =>{
  return(<>
      <div>this is Reserved Area</div>
      </>
      )
}
